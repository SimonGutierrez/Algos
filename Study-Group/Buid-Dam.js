while (p[r]) {
    posNum = Math.abs(p[l] - p[r])
    heightNum = Math.abs(h[l] - h[r])

    if (posNum >= heightNum) {
        //build mud wall

        if (currHeight - spaceAvail === endPt) {
            currMudWall += 0;
        } else if (currHeight - spaceAvail > endPt) {
            currMudWall -= 1;
        } else {
            currMudWall += 1;
        }

        //keep track of tallest
    }
}
