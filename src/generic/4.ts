/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface MyInter {
  title: string;
}

class Component<T extends MyInter> {
  constructor(public props: T) {}
}

class Page extends Component<MyInter> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
