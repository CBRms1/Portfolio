import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import useResponsiveOuterRadius from '../../hooks/useResponsiveOuterRadius'

const data = [
    { subject: 'Web development', mark: 150, fullMark: 150 },
    { subject: 'Database', mark: 120, fullMark: 150 },
    { subject: 'mobile development', mark: 50, fullMark: 150 },
    { subject: 'Information security', mark: 110, fullMark: 150 },
    { subject: 'Software tests', mark: 110, fullMark: 150 },
    { subject: 'Code versioning', mark: 130, fullMark: 150 },
]

const HardSkills = () => {
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

export default HardSkills