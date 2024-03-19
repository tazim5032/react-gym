import { LineChart as LCh, Line } from 'recharts';
const LineChart = () => {
    const math = [
        { id: 1, student: 'Alice', mathMarks: 85 },
        { id: 2, student: 'Bob', mathMarks: 78 },
        { id: 3, student: 'Charlie', mathMarks: 92 },
        { id: 4, student: 'David', mathMarks: 65 },
        { id: 5, student: 'Eve', mathMarks: 80 },
        { id: 6, student: 'Frank', mathMarks: 88 },
        { id: 7, student: 'Grace', mathMarks: 75 },
        { id: 8, student: 'Hannah', mathMarks: 82 },
        { id: 9, student: 'Ian', mathMarks: 70 },
        { id: 10, student: 'Jack', mathMarks: 90 }
      ];
      
    return (
        <div>
            <LCh width={500} h={400} data={math}>
                <Line dataKey="math"></Line>
            </LCh>
        </div>
    );
};

export default LineChart;