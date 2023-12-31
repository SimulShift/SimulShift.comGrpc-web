import {Box, Grid, styled} from '@mui/joy'
import {useState, useRef, useEffect} from 'react'
import SelectPersonalityComponent from './components/SelectPersonalityComponent'
import HistoryComponent from './components/HistoryComponent'
import CreatePersonalityComponent from './components/CreatePersonalityComponent'
import CommandComponent from './components/CommandComponent'
import StatisticsComponent from './components/StatisticsComponent'
import DirectionsComponent from './components/DirectionsComponent'
import BotSwitchContainer from './components/BotSwitchContainer'
import BotSwitch from './components/BotSwitch'
import {Personality} from '../../Protos/TwitchBot/TwitchBot_pb'
import ReplyToAllSwitch from './components/ReplyToAllSwitch'

const DraggableBox = styled(Box)(() => ({
  cursor: 'grab',
  '&:active': {
    cursor: 'grabbing',
  },
}))

const ControlPanel = () => {
  const [items, setItems] = useState<string[]>([
    'Toggle',
    'ReplyToAll',
    'Select',
    'History',
    'Create',
    'Command',
    'Statistics',
    'Directions',
  ])

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const draggedIndexRef = useRef<number | null>(null)
  const hoverIndexRef = useRef<number | null>(null)

  const getDraggableBoxStyle = (index: number) => {
    const isDragging = draggedIndexRef.current === index
    const isHovered = hoveredIndex === index

    const baseStyle = {
      color: 'black',
      backgroundColor: 'rgba(92,59,146,1)',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    }

    if (isDragging) {
      return {
        ...baseStyle,
        border: '2px dashed #2196F3', // Style for dragging element
      }
    } else if (isHovered) {
      return {
        ...baseStyle,
        backgroundColor: 'rgba(144,125,175,1)', // Style for hovered element
      }
    }

    return baseStyle // Default style for other elements
  }

  const handleDragStart = (index: number) => () => {
    draggedIndexRef.current = index
  }

  const handleDragOver = (index: number) => (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setHoveredIndex(index)
    hoverIndexRef.current = index
  }

  const handleDrop = (index: number) => () => {
    if (draggedIndexRef.current !== null && draggedIndexRef.current !== index) {
      const reorderedItems = [...items]
      const [draggedItem] = reorderedItems.splice(draggedIndexRef.current, 1)
      reorderedItems.splice(index, 0, draggedItem)
      setItems(reorderedItems)
    }
    setHoveredIndex(null)
    draggedIndexRef.current = null
    hoverIndexRef.current = null
  }

  useEffect(() => {
    const handleDragEnd = () => {
      draggedIndexRef.current = null
      hoverIndexRef.current = null
    }

    document.addEventListener('dragend', handleDragEnd)

    return () => {
      document.removeEventListener('dragend', handleDragEnd)
    }
  }, [])

  const dynamicComponent = (item: string) => {
    switch (item) {
      case 'Toggle':
        return (
          <BotSwitchContainer
            SwitchComponent={BotSwitch}
            personality={Personality.UWU}
            statusMsg="botOnline:"
          />
        )
      case 'ReplyToAll':
        return (
          <BotSwitchContainer
            SwitchComponent={ReplyToAllSwitch}
            personality={Personality.UWU}
            statusMsg="Replying To All: "
          />
        )
      case 'Select':
        return <SelectPersonalityComponent />
      case 'History':
        return <HistoryComponent />
      case 'Create':
        return <CreatePersonalityComponent />
      case 'Command':
        return <CommandComponent />
      case 'Statistics':
        return <StatisticsComponent />
      case 'Directions':
        return <DirectionsComponent />
      default:
        return item
    }
  }

  return (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid xs={6} sm={6} md={6} key={item}>
          <div
            draggable
            onDragStart={handleDragStart(index)}
            onDragOver={handleDragOver(index)}
            onDrop={handleDrop(index)}
            style={{breakInside: 'avoid-column', width: '100%', height: '100%'}}>
            <DraggableBox sx={getDraggableBoxStyle(index)}>{dynamicComponent(item)}</DraggableBox>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

export default ControlPanel
