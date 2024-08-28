'use client'

import React, { FC } from 'react'
import { Grid2 as Grid } from '@mui/material'

// Types
import type { SpinoramaItemProps } from './index.types'

const SpinoramaItem: FC<SpinoramaItemProps> = (props: SpinoramaItemProps) => {
	// Props
	const { ref, className, children, ...otherProps } = props

	return (
		<Grid ref={ref} className={`spinorama-item${className ? ` ${className}` : ''}`} size={12} flex="0 0 fit-content" {...otherProps}>
			{children}
		</Grid>
	)
}

export default SpinoramaItem
