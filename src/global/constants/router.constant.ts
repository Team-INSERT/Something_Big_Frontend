const ROUTER = {
  HOME: "/",
  MEISTER: "/meister",
  APPLICATIONS: "/applications",
  LOGIN: "/oauth",
  LOSTFOUND: {
    LIST: "/lostfound",
    WRITE: "/lostfound/write",
  },
  POST: {
    LIST: "/post",
    WRITE: "/post/write",
  },
  TIMETABLE: "/timetable",
} as const;

export default ROUTER;
