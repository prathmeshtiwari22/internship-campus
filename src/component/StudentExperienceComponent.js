import React from 'react';
import './StudentExperienceComponent.css'; 

const testimonials = [
  {
    name: 'BICH LE NGOC',
    intake: 'MGB Intake of 2022',
    role: 'Student',
    imageUrl: 'https://www.spjain.org/hs-fs/hubfs/Le%20Bich%20Ngoc.png?width=228&height=227&name=Le%20Bich%20Ngoc.png', // replace with the correct image path
    text: 'I chose SP Jain because it meets all that I needed. I wanted to study abroad, and the school has a tri-city program. The school’s high ranking proves this program’s quality. My course started in Dubai, and the Dubai campus is beautiful. The well-designed curriculum helps me build skills in new areas like marketing, finance, and operations.',
  },
  {
    name: 'KUNAL GOENKA',
    intake: 'MGB 2021',
    role: 'Manager, PwC Australia',
    imageUrl: 'https://www.spjain.org/hs-fs/hubfs/PG%20Testimonials/Kunal-Goenka.png?width=228&height=227&name=Kunal-Goenka.png', // replace with the correct image path
    text: 'Over the past 16 months, this course helped me grow personally and professionally. I was able to train under reputed international faculty and benefit from their expertise. Critical thinking, reasoning, and presenting are a few more skills I built during this period. I credit SP Jain Global’s MGB program for where I am today.',
  },
  {
    name: 'MAHDA SHANGRILA',
    intake: 'MGB Intake of 2022',
    role: 'Student',
    imageUrl: 'https://www.spjain.org/hs-fs/hubfs/Mahda-Shangrila.png?width=228&height=227&name=Mahda-Shangrila.png', // replace with the correct image path
    text: 'The MGB program at SP Jain challenges me to go through a lot of rigorous activities that will help me grow and suit my career goals and aspirations. I’m looking forward to the industry-related activities and the cultural experience in each city.',
  },
];

const StudentExperienceComponent = () => {
  return (
    <div className="student-experience" id="experiences">
      <h2 className="title">DISCOVER OUR STUDENT EXPERIENCES</h2>
      <p className="subtitle">
        Hear from our students and alumni as they share their SP Jain Global experience and career impact
      </p>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
            <h3 className="name">{testimonial.name}</h3>
            <p className="intake">{testimonial.intake}</p>
            <p className="role">{testimonial.role}</p>
            <p className="text">{testimonial.text}</p>
            <div className="quote-icon">❞</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentExperienceComponent;
