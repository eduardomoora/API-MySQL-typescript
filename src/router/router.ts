import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {

    const query = `
    SELECT *
    FROM heroes`;



    MySQL.ejecutaQuery(query, (err: any, heroes: Object[]) => {

        if (err) {
            res.status(400).json({
                ok: false,
                err

            })
        } else {
            res.status(200).json({
                ok: true,
                heroes
            })
        }

    });


});


router.get('/heroes/:id', (req: Request, res: Response) => {

    const id = req.params.id;

    const escapeId = MySQL.instance.connection.escape(id);

    const query = `
    SELECT *
    FROM heroes where id =${escapeId}`;



    MySQL.ejecutaQuery(query, (err: any, heroe: Object) => {




        if (err) {
            res.status(400).json({
                ok: false,
                err

            })
        } else {
            res.status(200).json({
                ok: true,
                heroe
            })
        }

    });
});
//exporting routes 
export default router;

