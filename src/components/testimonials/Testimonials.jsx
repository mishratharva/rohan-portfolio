import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Languages",
      img1: "assets/html.png",
      img2: "assets/javascript.png",
      img3: "assets/cpp.png",
      skills:['C++/C', 'Python', 'Javascript','HTML',  'Java']
    },
    {
      id: 2,
      name: "Martin Harold",
      title: "Databases/Technologies",
      img1: "assets/blockchain.png",
      img2: "assets/database.png",
      img3: "assets/ml.png",
      skills:['Data Structure & Algorithms', 'MongoDB (NoSQL)' ,'MySQL (SQL)', 'Machine Learning (Basic)','DeepLearning (Basic)' ],
      featured: true,
    },
    {
      id: 3,
      name: "Alex Kalinski",
      title: "Libraries/Framework",
      img1: "assets/django.png",
      img2: "assets/react.png",
      img3: "assets/node.jpg",
      skills:['ReactJs', 'NodeJs', 'SASS / CSS', 'Django',  'Tkinter']
       
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Skills</h1>
      <div className="container">

        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"} >
            <div key={d.id} className="top" >
              <img src={d.img1} className="left" alt="" />
              <img className="user" src={d.img2} alt="" />
              <img className="right" src={d.img3} alt="" />
            </div>
            <div className="bottom">
              <h3>{d.title}</h3>
            </div>
            <div className="center">
              {d.skills.map((skill)=>(
              <li key={Math.random()} className="skills">{skill}</li>)
              )}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
