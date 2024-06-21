// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res
      .status(200)
      .json({
        name: "Hi there! You landed to the MindMate Web API.",
      });
  }
  