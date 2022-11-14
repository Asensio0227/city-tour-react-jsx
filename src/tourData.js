import newYork from "./img/newyork.jpeg";
import paris from "./img/paris.jpeg"
import london from "./img/london.jpeg"
import tokyo from "./img/tokyo.jpeg"

const tourData = [
  {
    sys: {
      id: 1,
    },
    fields: {
      name: "new york bridge tour",
      city: "new york",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
    },
    images: [
      {
        fields: {
          file: {
            url: newYork
          }
        }
      }
    ]
  },
  {
    sys: {
      id: 2,
    },
    fields: {
      name: "paris lights tour",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!",
      city: "paris"
    },
    images: [
      {
        fields: {
          file: {
            url: paris
          }
        }
      }
    ]
  },
  {
    sys: {
      id: 3,
    },
    fields: {
      name: "london royal palace tour",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!",
      city: "london"
    },
    images: [
      {
        fields: {
          file: {
            url: london
          }
        }
      }
    ]
  },
  {
    sys: {
      id: 4,
    },
    fields: {
      name: "tokyo sushi tour",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus&!",
      city: "tokyo"
    },
    images: [
      {
        fields: {
          file: {
            url: tokyo
          }
        }
      }
    ]
  },
];

export default tourData