# MSO-Product-Card

Este es un paquete de pruebas de despliegue NPM

### MSO

## Ejemplo

```javascript
import { ProductCard, Image, Title, Buttons } from 'mso-product-card';
```

```javascript
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {() => (
    <>
      <ProductCard.Image />
      <ProductCard.Title />
      <ProductCard.Buttons />
    </>
  )}
</ProductCard>
```
