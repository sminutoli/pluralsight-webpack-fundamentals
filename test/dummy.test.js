'use strict';

import assert from 'assert';
import Main from './../src/main';
import { jsdom } from 'jsdom';

const createDocument = () => {
  
  const document = jsdom(undefined);
  const window = document.defaultView;
  global.document = document;
  global.window= window;
  global.userAgent = 'all';
  return document;

};

it('should be returning a <main> tag', () => {
  // "Arrange" Phase: where you do any setup or building of objects your test needs. This test is so simple it doesn't include this phase.
  
  // "Act" Phase: Perform whatever action your test tests. In this case we call our module.
  let dom = createDocument();

  // Explicit declarations of "actual" and "expected", this consistently allows the reader to know exactly what is being asserted. In large test files this kind of consistency is crucial.
  const output = Main.render(dom);
  const actual = output.tagName;
  const expected = 'MAIN';

  // "Assert" Phase: verify the actions your code performs.
  // Use of a dirt simple assert library
  // And always use comments/messages to describe the assertion. When your tests fail, they will tell you why.
  assert.equal(actual, expected, 'Main que renderear un <main>');
});