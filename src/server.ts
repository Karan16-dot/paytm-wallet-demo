import express from "express";

const app = express();
const PORT = 3000;


app.use(express.json());

app.get("/health",(req,res)=>{
    res.status(200).json({
        status:"ok",
        service: "paytm-wallet",
    });
});


app.listen(PORT,()=>{
    console.log(`Wallet server running on http://localhost:${PORT}`);
});