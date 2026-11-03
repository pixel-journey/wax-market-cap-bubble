# Architecture

```
supply, unitPrice, decimals
        │
        ▼
   marketCap → value, remainder, product, scale
        │
        ├── compareCaps
        └── bubbleRadius (teaching)
```

Honesty boundary: no market feed, no wallet, no broadcast.
