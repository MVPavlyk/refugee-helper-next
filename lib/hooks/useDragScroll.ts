import {useCallback, useEffect, useState} from "react";
import * as React from "react";

export const useDragScroll = (): [(node: HTMLElement | null) => void] => {
    const [node, setNode] = useState<HTMLElement | null>(null);

    const ref = useCallback((nodeEle: HTMLElement | null) => {
        if (nodeEle !== null) {
            setNode(nodeEle);
        }
    }, []);

    const handleMouseDown = useCallback(
        (e: React.MouseEvent) => {
            if (!node) {
                return;
            }
            const startPos = {
                left: node.scrollLeft,
                top: node.scrollTop,
                x: e.clientX,
                y: e.clientY,
            };

            const handleMouseMove = (e: MouseEvent) => {
                const dx = e.clientX - startPos.x;
                const dy = e.clientY - startPos.y;
                if (node) {
                    node.scrollTop = startPos.top - dy;
                    node.scrollLeft = startPos.left - dx;
                    updateCursor(node);
                }
            };

            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
                if (node) {
                    resetCursor(node);
                }
            };
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        },
        [node],
    );

    const handleTouchStart = useCallback(
        (e: React.TouchEvent) => {
            if (!node) {
                return;
            }
            const touch = e.touches[0];
            const startPos = {
                left: node.scrollLeft,
                top: node.scrollTop,
                x: touch.clientX,
                y: touch.clientY,
            };

            const handleTouchMove = (e: TouchEvent) => {
                const touch = e.touches[0];
                const dx = touch.clientX - startPos.x;
                const dy = touch.clientY - startPos.y;
                if (node) {
                    node.scrollTop = startPos.top - dy;
                    node.scrollLeft = startPos.left - dx;
                    updateCursor(node);
                }
            };

            const handleTouchEnd = () => {
                document.removeEventListener("touchmove", handleTouchMove);
                document.removeEventListener("touchend", handleTouchEnd);
                if (node) {
                    resetCursor(node);
                }
            };

            document.addEventListener("touchmove", handleTouchMove);
            document.addEventListener("touchend", handleTouchEnd);
        },
        [node],
    );

    const updateCursor = (ele: HTMLElement) => {
        ele.style.cursor = "grabbing";
        ele.style.userSelect = "none";
    };

    const resetCursor = (ele: HTMLElement) => {
        ele.style.cursor = "grab";
        ele.style.removeProperty("user-select");
    };

    useEffect(() => {
        if (node) {
            // @ts-ignore
            node.addEventListener("mousedown", handleMouseDown);
            // @ts-ignore
            node.addEventListener("touchstart", handleTouchStart);
            return () => {
                // @ts-ignore
                node.removeEventListener("mousedown", handleMouseDown);
                // @ts-ignore
                node.removeEventListener("touchstart", handleTouchStart);
            };
        }
    }, [node, handleMouseDown, handleTouchStart]);

    return [ref];
};
