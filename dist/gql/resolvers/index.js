import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const result = db.products.find((product) => product.id === args.productId);
            return result;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            const result = db.categories.find((category) => category.id === args.categoryId);
            return result;
        }
    },
    Product: {
        category: (parent, args, context) => {
            const result = db.categories.find((category) => category.id === parent.categoryId);
            return result;
        },
        reviews: (parent, args, context) => {
            const result = db.reviews.filter((review) => review.productId === parent.id);
            return result;
        }
    },
    Category: {
        products: (parent, args, context) => {
            const result = db.products.filter((product) => product.categoryId === parent.id);
            return result;
        }
    }
};
