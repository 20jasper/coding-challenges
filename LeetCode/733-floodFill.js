//URL--
// https://leetcode.com/problems/flood-fill/

//INSTRUCTIONS--
/* An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

 

Example 1:

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.

 

Constraints:

		m == image.length
		n == image[i].length
		1 <= m, n <= 50
		0 <= image[i][j], color < 216
		0 <= sr < m
		0 <= sc < n


*/

//SOLUTION--
/* 
If the starting pixel is already the same color, return the image
Else, change the current pixel to the newColor
change run the function on the pixels in the four surrounding directions that are the same color as the original pixel
*/

/**
 * @param {*} image 
 * @param {*} startRow 
 * @param {*} startColumn 
 * @param {*} newColor 
 * @return {number[][]}
 */
const floodFill = (image, startRow, startColumn, newColor, firstColor = image[startRow][startColumn]) => {
	// If the starting pixel is outside of the image or the starting pixel is the same color as the new color, or the color is different from the original pixel, return the image
	if (startRow < 0 ||
		startColumn < 0 ||
		startRow >= image.length ||
		startColumn >= image[0].length ||
		image[startRow][startColumn] !== firstColor ||
		image[startRow][startColumn] === newColor) {
		return image
	}

	// change the pixel color to the new color
	image[startRow][startColumn] = newColor

	//run the function on all the pixels surrounding the original four directionally
	floodFill(image, startRow, startColumn + 1, newColor, firstColor);
	floodFill(image, startRow, startColumn - 1, newColor, firstColor);
	floodFill(image, startRow + 1, startColumn, newColor, firstColor);
	floodFill(image, startRow - 1, startColumn, newColor, firstColor);
	//return the image
	return image
};

// TESTCASES--
console.log(floodFill([
	[1, 1, 1],
	[1, 1, 0],
	[1, 0, 1]], 1, 1, 2), [
	[2, 2, 2],
	[2, 2, 0],
	[2, 0, 1]]);
console.log(floodFill([
	[1, 1, 1],
	[1, 1, 0],
	[1, 0, 1]], 1, 2, 2), [
	[1, 1, 1],
	[1, 1, 2],
	[1, 0, 1]]);
console.log(floodFill([
	[0]], 0, 0, 1), [
	[1]]);
console.log(floodFill([
	[1]], 0, 0, 1), [
	[1]]);

/* Optimizations
Used optional chaining for readability
*/
/**
 * @param {*} image 
 * @param {*} startRow 
 * @param {*} startColumn 
 * @param {*} newColor 
 * @return {number[][]}
 */
const floodFill2 = (image, startRow, startColumn, newColor, firstColor = image[startRow][startColumn]) => {

	// If the starting pixel is outside of the image or the starting pixel is the same color as the new color, or the color is different from the original pixel, return the image
	if (image?.[startRow]?.[startColumn] === undefined ||
		image[startRow][startColumn] !== firstColor ||
		image[startRow][startColumn] === newColor) {
		return image
	}

	// change the pixel color to the new color
	image[startRow][startColumn] = newColor

	//run the function on all the pixels surrounding the original four directionally
	floodFill2(image, startRow, startColumn + 1, newColor, firstColor);
	floodFill2(image, startRow, startColumn - 1, newColor, firstColor);
	floodFill2(image, startRow + 1, startColumn, newColor, firstColor);
	floodFill2(image, startRow - 1, startColumn, newColor, firstColor);
	//return the image
	return image
};

// TESTCASES--
console.log(floodFill2([
	[1, 1, 1],
	[1, 1, 0],
	[1, 0, 1]], 1, 1, 2), [
	[2, 2, 2],
	[2, 2, 0],
	[2, 0, 1]]);
console.log(floodFill2([
	[1, 1, 1],
	[1, 1, 0],
	[1, 0, 1]], 1, 2, 2), [
	[1, 1, 1],
	[1, 1, 2],
	[1, 0, 1]]);
console.log(floodFill2([
	[0]], 0, 0, 1), [
	[1]]);
console.log(floodFill2([
	[1]], 0, 0, 1), [
	[1]]);
