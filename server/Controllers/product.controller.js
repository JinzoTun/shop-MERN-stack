import { Product } from '../Models/productModel.js';


export const createProduct = async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.category ||
            !request.body.price
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newProduct = {
            title: request.body.title,
            category: request.body.category,
            price: request.body.price,
        };

        const product = await Product.create(newProduct);

        return response.status(201).send(product);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}

export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        return response.status(200).json({ products });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}

export const getProduct = async (request, response) => {
    try {
        const product = await Product.findById(request.params.id);

        if (!product) {
            return response.status(404).send({
                message: 'Product not found',
            });
        }

        return response.status(200).send(product);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}

export const updateProduct = async (request, response) => {
    try {
        const product = await Product.findById(request.params.id);

        if (!product) {
            return response.status(404).send({
                message: 'Product not found',
            });
        }

        product.title = request.body.title;
        product.category = request.body.category;
        product.price = request.body.price;

        await product.save();

        return response.status(200).send(product);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}


export const deleteProduct = async (request, response) => {
    try {
        const product = await Product.findById(request.params.id);

        if (!product) {
            return response.status(404).send({
                message: 'Product not found',
            });
        }

        await product.deleteOne();

        return response.status(200).send({
            message: 'Product deleted successfully',
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}