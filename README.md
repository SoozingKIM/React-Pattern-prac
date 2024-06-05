# React Pattern study

## Compound Components (합성 컴포넌트) 패턴

스스로 동작하지 않는 (독립적이지 않은) 리액트 컴포넌트.

> HTML에서의 예시 : `<select>` & `<option>`

아코디언을 만들어서 알아본다.

모든 요소는 속성 값과 스타일에 있어 독립적이지만, 하나의 요소를 열면 다른 요소는 닫혀야 하므로 제어에 있어서는 종속적이다.

이런 경우 합성 컴포넌트 패턴을 사용한다.

### 기본 레이아웃

- `ul`용 (wrapper)

```js
// <Accordion> 컴포넌트

function Accordion({ children, className }) {
  return <ul className={className}>{children}</ul>;
}

export default Accordion;
```

- `li`용

```js
// <AccordionItem> 컴포넌트

function AccordionItem({ className, title, children }) {
  return (
    <li className={className}>
      <h3>{title}</h3>
      <div>{children}</div>
    </li>
  );
}

export default AccordionItem;
```

- 사용

```js
// <App> 컴포넌트

<Accordion className="accordian">
  <AccordionItem title="1번 이유 입니다.">
    <article>
      <p>어쩌구 저쩌구 내용 1</p>
      <p>어쩌구 저쩌구 내용 2</p>
    </article>
  </AccordionItem>
  <AccordionItem title="2번 이유 입니다.">
    <article>
      <p>어쩌구 저쩌구 내용 1</p>
      <p>어쩌구 저쩌구 내용 2</p>
    </article>
  </AccordionItem>
</Accordion>
```
