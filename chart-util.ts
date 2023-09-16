// TODO: modify chart.js enough so it doesn't look like other website charts
// @ts-ignore
import {theme} from '#tailwind-config'

import { Chart, Title, Legend, Tooltip, PointElement, LineElement, CategoryScale, LinearScale } from 'chart.js'
Chart.register(Title, PointElement, Legend, Tooltip, LineElement, CategoryScale, LinearScale)

Chart.defaults.interaction.intersect = false

Chart.defaults.elements.point.radius = 5
Chart.defaults.elements.point.backgroundColor = theme.colors.primary[600]
Chart.defaults.elements.point.hoverRadius = 10
Chart.defaults.elements.point.hoverBackgroundColor = theme.colors.primary[600]
Chart.defaults.elements.line.borderColor = theme.colors.primary[600]
Chart.defaults.elements.line.borderColor = theme.colors.primary[600]
Chart.defaults.elements.line.tension = 0.3

Chart.defaults.plugins.tooltip.cornerRadius = 2
Chart.defaults.plugins.tooltip.backgroundColor = theme.colors.white
Chart.defaults.plugins.tooltip.borderColor = theme.colors.gray[600]
Chart.defaults.plugins.tooltip.borderWidth = 1
Chart.defaults.plugins.tooltip.titleColor = theme.colors.black
Chart.defaults.plugins.tooltip.bodyColor = theme.colors.black
Chart.defaults.plugins.tooltip.usePointStyle = true

