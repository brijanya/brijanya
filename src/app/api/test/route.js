import clientPromice from "@/lib/mongodb";

export let GET = async () => {
    const client = await clientPromice
    const db = client.db("sample_supplies")
    const cursor = db.collection("sales")
    const sales = await cursor.find({}).toArray()
    console.log(sales.length)
    return Response.json(sales)
}