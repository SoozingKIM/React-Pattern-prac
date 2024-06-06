# React Pattern study

## Compound Components (합성 컴포넌트) Pattern

스스로 동작하지 않는 (독립적이지 않은) 리액트 컴포넌트.

> HTML에서의 예시 : `<select>` & `<option>`

아코디언을 만들어서 알아본다.

모든 요소는 속성 값과 스타일에 있어 독립적이지만, 하나의 요소를 열면 다른 요소는 닫혀야 하므로 제어에 있어서는 종속적이다.

이런 경우 합성 컴포넌트 패턴을 사용한다.

### 1. 기본 레이아웃

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

### 2. 제어하기 - context API 사용

Accordion 컴포넌트에서 정의한 컨텍스트 값을 연관된 다른 컴포넌트가 받아야한다.  
AccordionItem 컴포넌트에서 받아야하는 것이다.  
이 처리를 간단하고 안전하게 하기 위해 Accordion 컴포넌트에서 `커스텀 훅`을 추가한다.
그리고 `커스텀 훅`을 AccordionItem 컴포넌트에 불러서 사용한다.  
내용물이 보이고 안 보이고는 CSS 속성을 통해 구현한다.

### 자식 컴포넌트를 wrapper 컴포넌트의 속성으로 추가

`<Accordion>`은 `<AccordionItem>`의 wrapper 이다.

컴포넌트는 함수이고, JS에서 함수는 객체이기 때문에 `<Accordion>`의 객체에 값으로 `<AccordionItem>`을 추가할 수 있다.  
이렇게 함으로써 엮여 돌아가는 두 컴포넌트의 관계를 명시적으로 명백히 표현할 수 있다.

```js
// <Accordion> 컴포넌트

/* 컴포넌트 관련 코드들 생략 */

Accordion.Item = AccordionItem; //<Accordion> 객체에 Item 키로 AccordionItem이라는 값을 가지게 된다.
```

컴포넌트로 사용할 때는 `<Accordion.Item>` 으로 사용하면 된다.