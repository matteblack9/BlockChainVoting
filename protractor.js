var favorite = element(by.binding('my.favorite'));

it('should initialize to model', function() {
  expect(favorite.getText()).toContain('unicorns');
});

it('should bind the values to the inputs', function() {
  element.all(by.model('my.favorite')).get(0).click();
  expect(favorite.getText()).toContain('pizza');
});

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/