# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with the React `useEffect` hook: the cleanup function not being called as expected. This can lead to unexpected behavior, especially when dealing with side effects.

## Problem

The provided code has a `useEffect` hook with a cleanup function. However, the cleanup function may not be called in some circumstances, leading to issues like memory leaks or unexpected side effects.

## Solution

The issue is resolved by correctly adding the `count` variable to the dependency array. This ensures the cleanup function is called before the next render.