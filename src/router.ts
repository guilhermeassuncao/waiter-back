import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

//Listar Categorias
router.get('/categories', listCategories);

//Criar Categoria
router.post('/categories', createCategory);

//Listar Produtos
router.get('/products', (req, res) => {
    res.send('OK');
});

//Criar Produtos
router.post('/products', (req, res) => {
    res.send('OK');
});

//Buscar Produtos por Categoria
router.get('/categories/:categoryId/products', (req, res) => {
    res.send('OK');
});

//Listar Ordens
router.get('/orders', (req, res) => {
    res.send('OK');
});

//Criar Ordem
router.post('/orders', (req, res) => {
    res.send('OK');
});

//Alterar Status Ordem
router.patch('/orders/:orderId', (req, res) => {
    res.send('OK');
});

//Deletar Ordem
router.delete('/orders/:orderId', (req, res) => {
    res.send('OK');
});
