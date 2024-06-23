import React, { useEffect, useRef } from "react";

function useDragger(cardId, contId) {
  const cardRef = useRef(null);
  const contRef = useRef(null);
  const coords = useRef({
    newX: 0,
    newY: 0,
    startX: 0,
    startY: 0,
  });

  useEffect(() => {
    cardRef.current = document.getElementById(cardId);
    contRef.current = document.getElementById(contId);

    if (!cardRef.current || !contRef.current) return;

    const card = cardRef.current;
    const cont = contRef.current;

    const handleMouseDown = (e) => {
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
      const containerRect = cont.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      coords.current.newX = e.clientX - coords.current.startX;
      coords.current.newY = e.clientY - coords.current.startY;

      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;

      let newTop = card.offsetTop + coords.current.newY;
      let newLeft = card.offsetLeft + coords.current.newX;

      const minTop = 0;
      const minLeft = 0;
      const maxTop = containerRect.height - cardRect.height;
      const maxLeft = containerRect.width - cardRect.width;

      const finalX = Math.min(Math.max(newTop, minTop), maxTop);
      const finalY = Math.min(Math.max(newLeft, minLeft), maxLeft);

      card.style.top = `${finalX}px`;
      card.style.left = `${finalY}px`;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    card.addEventListener("mousedown", handleMouseDown);

    return () => {
      card.removeEventListener("mousedown", handleMouseDown);
    };
  }, [cardId, contId]);

  useEffect(() => {
    const card = document.getElementById(cardId);
    card.addEventListener("mouseenter", handleCursorGrabEnter);
    card.addEventListener("mousedown", handleCursorGrabbing);
    card.addEventListener("mouseup", handleCursorMouseUp);
    card.addEventListener("mouseleave", handleCursorDefault);

    function handleCursorGrabEnter() {
      card.style.cursor = "grab";
    }

    function handleCursorGrabbing() {
      card.style.cursor = "grabbing";
    }

    function handleCursorMouseUp() {
      card.style.cursor = "grab";
    }

    function handleCursorDefault() {
      card.style.cursor = "default";
    }
    return () => {
      card.removeEventListener("mouseenter", handleCursorGrabEnter);
      card.removeEventListener("mousedown", handleCursorGrabbing);
      card.removeEventListener("mouseup", handleCursorMouseUp);
      card.removeEventListener("mouseleave", handleCursorDefault);
    };
  }, [cardId]);

  return null;
}

export default useDragger;
