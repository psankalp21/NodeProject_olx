import { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const router = Router();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node API on OLX',
      version: '1.0.0',
      description: 'OLX based APIs',
    },
    servers: [
      {
        url: 'http://localhost:5000', 
      },
    ],
  },
  apis: ['./src/routes/index.route.ts'],
};

const specs = swaggerJsdoc(options);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default router;
