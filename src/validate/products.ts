import Joi from "joi";

export const validateProduct = (product: any) => {
  const schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number().required(),
    bannerUrl: Joi.string().required(),
    quantity: Joi.number().required(),
    categoryId: Joi.string(),
  });

  return schema.validate(product);
};
