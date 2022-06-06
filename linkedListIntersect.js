getIntersectionNode = function (headA, headB) {
  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    if (!pointerA) {
      pointerA = headB;
    } else {
      pointerA = pointerA.next;
    }

    if (!pointerB) {
      pointerB = headA;
    } else {
      pointerB = pointerB.next;
    }
  }

  return pointerA;
};
