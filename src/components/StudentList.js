import React from 'react'

import StudentCard from './StudentCard'

const StudentList = ({ students }) => {
  const studentCards = students.map(student => {
    return <StudentCard key={student.id}
      id={student.id}
      name={student.name}
      cohort={student.cohort}
    />
  })

  return (
    <div className='cake-container'>
      {studentCards}
    </div>
  )
}

export default StudentList