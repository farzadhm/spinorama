import * as React from 'react'
import { Box } from '@mui/material'

// Types
import type { SpinoramaCarouselProps } from './Carousel.types'

// Components
const SpinoramaItem = React.lazy(() => import('../Item').then(module => ({ default: module.SpinoramaItem })))

const SpinoramaCarousel: React.FC<SpinoramaCarouselProps> = (props: SpinoramaCarouselProps) => {
	// Props
	const { className, children } = props

	return (
		<Box className={`spinorama-carousel${className ? ` ${className}` : ''}`} display="flex" width={1}>
			<Box className="spinorama-carousel-wrapper" display="flex" overflow="hidden">
				{React.Children.map(children, (child, index) => {
					if (React.isValidElement(child)) {
						// Get element
						const elm = React.cloneElement(child)

						// Check is item
						const isItem = child.type.toString().indexOf('spinorama-item') > -1

						return isItem ? elm : <SpinoramaItem key={index}>{elm}</SpinoramaItem>
					} else return null
				})}
			</Box>
		</Box>
	)
}

export { SpinoramaCarousel }
