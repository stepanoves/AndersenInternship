describe("тестирование контейнера", function() {
    
    it("позитивный, регистрация класса wheel", function() {  
        Container.register('wheel', Wheel);
        assert.equal(Container.get('wheel').__name, 'wheel1');
    });

    it("позитивный, регистрация класса wheel2", function() {  
        Container.register('wheel2', Wheel2);
        assert.equal(Container.get('wheel2').__name, 'wheel2');
    });
  
    it("негативный, регистрация класса wheel2", function() {  
        Container.register('wheel2', Wheel2);
        assert.notEqual(Container.get('wheel2').__name, 'wheel1');
    });

    it("позитивный, проверка зависимостей", function() {
        Container.register('car', Car);  
        Container.register('wheel2', Wheel2);
        assert.equal(Container.get('car').getWheel(), 'wheel2');
    });

    it("негативный, проверка зависимостей", function() {
        Container.register('car', Car);  
        Container.register('wheel2', Wheel2);
        Container.register('wheel', Wheel);
        assert.notEqual(Container.get('car').getWheel(), 'wheel');
    });

  });