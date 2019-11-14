import { Sudoku } from './../src/sudoku-backend.js';

  describe('Sudoku', () => {
    test('should verify that none of the user input is lower than 1 or higher than 9', () => {
      var bigArrays = [5, 0, "", "", 7, 10, "", "", "", 6, ""];
      expect(Sudoku.numCheck).toEqual(false);


    });

  });
