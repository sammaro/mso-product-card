[![CI](https://github.com/sammaro/mso-product-card/actions/workflows/main.yml/badge.svg)](https://github.com/sammaro/mso-product-card/actions/workflows/main.yml)

<p align="center">
  <h1 align="center">MSO-Product-Card</h1>
  <p align="center">This is a React testing NPM project</p>
  <p align="center" style="align: center;">
    <img alt="Sammaro's mso-product-card name"              src="https://img.shields.io/github/package-json/name/sammaro/mso-product-card" />
    <img alt="Sammaro's mso-product-card tag"               src="https://img.shields.io/github/v/tag/sammaro/mso-product-card" />
    <img alt="Sammaro's mso-product-card release"           src="https://img.shields.io/github/v/release/sammaro/mso-product-card" />
    <img alt="Sammaro's mso-product-card release date"      src="https://img.shields.io/github/release-date/sammaro/mso-product-card" />
    <img alt="Sammaro's mso-product-card repo size"         src="https://img.shields.io/github/repo-size/sammaro/mso-product-card" />
    <img alt="Sammaro's mso-product-card top language used" src="https://img.shields.io/github/languages/top/sammaro/mso-product-card" />
  </p>
</p>

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

---

⭐️ From [sammaro](https://github.com/sammaro)

---
