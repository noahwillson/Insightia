const courses = {
  recommended: [
    {
      id: 1,
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      author: "Jonas Schmedtmann",
      authorAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      badge: "Beginner Level",
      category: "JavaScript",
      image:
        "https://cyberhoot.com/wp-content/uploads/2020/07/Free-Courses-to-learn-JavaScript-1024x576.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benfits: [
        "14 Hours of Content",
        "Full Lifetime Access",
        "Access to 200+ Experts",
        "Certificate of Completion",
        "24/7 Support",
        "Native Teacher",
      ],
    },
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      badge: "Intermediate Level",
      category: "Python",
      image:
        "https://images.datacamp.com/image/upload/f_auto,q_auto:best/v1603718736/Why_Your_Company_Needs_Python_for_Business_Analytics_xzzles.png",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 180,
    },
    {
      title: "The Complete 2022 Web Development Bootcamp",
      badge: "10% Off",
      category: "Web Development",
      image:
        "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040425.jpg?t=st=1710128377~exp=1710131977~hmac=6986f6fe84b7bc5a9afba401b314d8e9341bf62fd7acab18103051286e9b8acb&w=1380",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 250,
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      badge: "20% Off",
      category: "React",
      image:
        "https://www.classcentral.com/report/wp-content/uploads/2022/10/React-JS-BCG-Banner.png",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 180,
    },
    {
      title: "The Complete 2022 Web Development Bootcamp",
      badge: "Web Development",
      category: "Web Development",
      image: "https://example.com/image.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 250,
    },
    {
      title: "The Complete 2022 Web Development Bootcamp",
      badge: "Web Development",
      category: "Web Development",
      image: "https://example.com/image.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 250,
    },
    {
      title: "The Complete 2022 Web Development Bootcamp",
      badge: "Web Development",
      category: "Web Development",
      image: "https://example.com/image.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 250,
    },
    {
      title: "The Complete 2022 Web Development Bootcamp",
      badge: "Web Development",
      category: "Web Development",
      image: "https://example.com/image.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 250,
    },
    // Add more recommended courses here...
  ],
  trending: [
    {
      title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
      badge: "Data Science",
      category: "Machine Learning",
      image:
        "https://ksr-ugc.imgix.net/assets/015/692/357/198315f4d17ce60015e925ba74b7e9d5_original.jpg?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1488338170&auto=format&frame=1&q=92&s=6e422694d2962f4cc6bd66bc71df7e4c",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 150,
    },
    {
      title: "Angular - The Complete Guide (2022 Edition)",
      badge: "Web Development",
      category: "Angular",
      image: "https://www.sipexe.com/assets/courses/Angular.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 220,
    },
    {
      title: "Java Programming Masterclass for Software Developers",
      badge: "Software Development",
      category: "Java",
      image:
        "https://www.trycatchclasses.com/wp-content/uploads/2020/02/Java.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 210,
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      badge: "Web Development",
      category: "React",
      image:
        "https://www.classcentral.com/report/wp-content/uploads/2022/10/React-JS-BCG-Banner.png",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 180,
    },
    {
      title: "The Complete 2022 Web Development Bootcamp",
      badge: "Web Development",
      category: "Web Development",
      image: "https://example.com/image.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 250,
    },
    {
      title: "The Complete 2022 Web Development Bootcamp",
      badge: "Web Development",
      category: "Web Development",
      image: "https://example.com/image.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 250,
    },
    // Add more trending courses here...
  ],
  popular: [
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      badge: "Web Development",
      category: "React",
      image:
        "https://www.classcentral.com/report/wp-content/uploads/2022/10/React-JS-BCG-Banner.png",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 180,
    },
    {
      title: "Java Programming Masterclass for Software Developers",
      badge: "Software Development",
      category: "Java",
      image:
        "https://www.trycatchclasses.com/wp-content/uploads/2020/02/Java.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 210,
    },
    {
      title: "The Complete 2022 Web Development Bootcamp",
      badge: "Web Development",
      category: "Web Development",
      image:
        "https://www.classcentral.com/report/wp-content/uploads/2022/04/BCG-Web-Development-NEW-Banner.png",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 250,
    },
    {
      title: "Angular - The Complete Guide (2022 Edition)",
      badge: "Web Development",
      category: "Angular",
      image: "https://www.sipexe.com/assets/courses/Angular.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 220,
    },
    {
      title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
      badge: "Data Science",
      category: "Machine Learning",
      image: "https://example.com/image.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 150,
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      badge: "Web Development",
      category: "JavaScript",
      image:
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 200,
    },
    {
      title: "The Complete 2022 Web Development Bootcamp",
      badge: "Web Development",
      category: "Web Development",
      image: "https://example.com/image.jpg",
      rating: {
        count: 0,
        rate: 0,
      },
      price: 250,
    },
    // Add more popular courses here...
  ],
};

export default courses;
