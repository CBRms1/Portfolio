import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import useResponsiveOuterRadius from '../../hooks/useResponsiveOuterRadius'

const data = [
    { subject: 'Communication', mark: 90, fullMark: 150 },
    { subject: 'Conflict resolution', mark: 120, fullMark: 150 },
    { subject: 'Creativity', mark: 140, fullMark: 150 },
    { subject: 'Motivated', mark: 100, fullMark: 150 },
    { subject: 'Adaptability', mark: 80, fullMark: 150 },
    { subject: 'Team-building', mark: 100, fullMark: 150 },
]

const SoftSkills = () => {
    const outerRadius = useResponsiveOuterRadius(150, 50)

    return (
        <ResponsiveContainer height={600}>
            <RadarChart outerRadius={outerRadius} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey='subject' />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name='Cauber' dataKey='mark' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default SoftSkills