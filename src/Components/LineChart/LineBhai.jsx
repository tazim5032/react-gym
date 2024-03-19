import { LineChart, Line, XAxis, YAxis} from 'recharts';
const LineBhai = () => {
    const subject = [
        { id: 1, student: 'Alice', mathMarks: 85, physicsMarks: 78, chemistryMarks: 90, biologyMarks: 83 },
        { id: 2, student: 'Bob', mathMarks: 78, physicsMarks: 72, chemistryMarks: 85, biologyMarks: 79 },
        { id: 3, student: 'Charlie', mathMarks: 92, physicsMarks: 88, chemistryMarks: 94, biologyMarks: 90 },
        { id: 4, student: 'David', mathMarks: 65, physicsMarks: 70, chemistryMarks: 60, biologyMarks: 68 },
        { id: 5, student: 'Eve', mathMarks: 80, physicsMarks: 75, chemistryMarks: 82, biologyMarks: 77 },
        { id: 6, student: 'Frank', mathMarks: 88, physicsMarks: 82, chemistryMarks: 90, biologyMarks: 85 },
        { id: 7, student: 'Grace', mathMarks: 75, physicsMarks: 68, chemistryMarks: 78, biologyMarks: 72 },
        { id: 8, student: 'Hannah', mathMarks: 82, physicsMarks: 79, chemistryMarks: 85, biologyMarks: 80 },
        { id: 9, student: 'Ian', mathMarks: 70, physicsMarks: 65, chemistryMarks: 72, biologyMarks: 68 },
        { id: 10, student: 'Jack', mathMarks: 90, physicsMarks: 85, chemistryMarks: 92, biologyMarks: 88 }
      ];
      
    return (
        <div>
            <LineChart width={800} height={400} data={subject}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line  dataKey="mathMarks" stroke='red'/>
                <Line  dataKey="physicsMarks" stroke='yellow'/>
                <Line  dataKey="chemistryMarks" stroke='blue'/>
                <Line  dataKey="biologyMarks"/>
            </LineChart>
        </div>
    );
};

export default LineBhai;