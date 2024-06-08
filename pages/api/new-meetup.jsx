import {MongoClient} from 'mongodb'

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res){
    if (req.method === "POST") {
    try {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://olaniyidavid2002:davisco32@cluster0.ype1yze.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne({ data });

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup Inserted!" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
    } else {
      // Handle any other HTTP method
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;