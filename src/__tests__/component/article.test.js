import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import ArticleComponent from '../../components/Articles.jsx';

describe('Article component', () => {
  let app;
  const mockArticle =
    [
      {
        author: 'Ajaps Franklin',
        title: 'Nigeria is now a developed country',
        description: 'Nigeria is now one of the most developed country......',
        url: 'https://thenextweb.com/insider/2017/06/14/pornhub-piss-off-entir',
        urlToImage: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files.jpg',
        publishedAt: '2018-06-06T21:20:41Z'
      },
      {
        author: 'tnude Abiola',
        title: 'A Nigerian manufactured the fastest car',
        description: 'A nigerian by the name of obinna manufactured the.....',
        url: 'https://bbc-news.com/insider/2017/06/14/pornhub-piss-off-entir',
        urlToImage: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files.jpg',
        publishedAt: '2018-07-06T21:20:41Z'
      },
    ];

  beforeEach(() => {
    app = shallow(<ArticleComponent articles={mockArticle} error={'error'}/>);
  });

  it('should render as expected', () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it('should have extacly two div element if an Error occured', () => {
    expect(app.find('div').length).toEqual(2);
  });

  it('should have 2 img(image) tag representing the number of articles', () => {
    const app1 = shallow(<ArticleComponent articles={mockArticle} />);
    expect(app1.find('img').length).toEqual(2);
  });
});
