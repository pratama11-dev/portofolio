import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Portfolio from '../models/portfolioModel.js';


const portfolioRouter = express.Router();

portfolioRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const portfolio = await Portfolio.find({});
      res.send(portfolio);
    })
  );

  portfolioRouter.get('/seed', 
    expressAsyncHandler( async(req, res) => {
        await Portfolio.remove({});
        const createdPortfolio = await Portfolio.insertMany(data.portfolio);
        res.send({ createdPortfolio });
    })
);

portfolioRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const portfolio = await Portfolio.findById(req.params.id);
      if (portfolio) {
        res.send(portfolio);
      } else {
        res.status(404).send({ message: 'Tidak Menemukan Data' });
      }
    })
  );

portfolioRouter.post(
  '/',
//   isAuth,
//   isAdmin,
  expressAsyncHandler(async (req, res) => {
    // const alat = new Alat({
    //   nama: 'sample ' + Date.now(),
    //   tujuan: 'sample',
    //   langkah: 'sample',
    //   tools: [
    //     {
    //       img:'/img/stetoskop.png',
    //       desc:'sample'
    //     },
    //   ]
    // });
    const createdPortfolio = await portfolio.save();
    res.send({ message: 'Membuat Data Baru', portfolio: createdPortfolio });
    if(createdPortfolio){
      return res.status(201).send({ message: "Membuat Data Baru", data: createdPortfolio});
    }
    return res.status(500).send({ message: "Terjadi Kesalahan Dalam Membuat Data"})
  })
);

// alatRouter.put(
//   '/:id',
//   isAuth,
//   isAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const alatId = req.params.id;
//     const alat = await Alat.findById(alatId);
//     if (alat) {
//       alat.nama = req.body.nama;
//       alat.tujuan = req.body.tujuan;
//       alat.langkah = req.body.langkah;
//       alat.tools = [{
//         img : req.body.img,
//         desc : req.body.desc
//       }];
//       // alat.img = req.body.img;
//       // alat.desc = req.body.desc;      
//       const updatedAlat = await alat.save();
//       res.send({ message: 'Alat Updated', alat: updatedAlat });
//     } else {
//       res.status(404).send({ message: 'Alat Tidak ditemukan' });
//     }
//   })
// );

// alatRouter.delete(
//   '/:id',
//   isAuth,
//   isAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const alat = await Alat.findById(req.params.id);
//     if (alat) {
//       const deleteAlat = await alat.remove();
//       res.send({ message: 'Menghapus Data', alat: deleteAlat });
//     } else {
//       res.status(404).send({ message: 'Data Tidak Ditemukan' });
//     }
//   })
// );
  

export default portfolioRouter;