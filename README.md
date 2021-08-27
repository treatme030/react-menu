## 🍩 react-category menu

데이터에서 중복되지 않게 카테고리명 추출하기
```javascript
const allCategories = ['all',...new Set(items.map(item => item.category))]
```


<참고>Coding Addict
