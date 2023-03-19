# React app (Vite)

### Visualising shapes in the HTML

Each piece is currently rendered as a set of individual elements representing each square constituting the shape. These are placed on a CSS Grid.

This makes it trickier to do things with the shape as a whole such as adding an outline to the whole or picking up the whole in a drag and drop action.

### Other options

-   SVG
-   Canvas
-   Images

# TODO:

-   add piece selection (not random piece!)
-   add piece-flipping (at least on one axis)
-   add scoring
-   add a simplest AI which just picks a move at random

## Done:

-   enforce proper piece placement rules
    -   no pieces placed? must hit starting square
    -   must not overlap any cell
    -   must not be orthogonally adjacent to any placed cell of own colour
    -   must diagonally touch at least one same-colour cell from a previously placed piece.
-   mark starting squares
