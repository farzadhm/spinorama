import * as React from 'react'
import { Grid } from '@mui/material'

// Types
import type { SpinoramaSlideshowProps } from './Slideshow.types'

const SpinoramaSlideshow: React.FC<SpinoramaSlideshowProps> = (props: SpinoramaSlideshowProps) => {
	// Props
	const { className, children } = props

	return <Grid className={className}>{children}</Grid>
}

export { SpinoramaSlideshow }