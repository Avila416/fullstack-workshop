package com.ksoft.challenges;

import java.util.Objects;

public class Generic<K,V> {

	    private final K key;
	    private final V value;

	    public Generic(K key, V value) {
	        this.key = key;
	        this.value = value;
	    }

	    
	    public K getKey() {
	        return key;
	    }

	   
	    public V getValue() {
	        return value;
	    }

	    public Generic<V, K> swap() {
	        return new Generic<>(value, key);
	    }

	    @Override
	    public boolean equals(Object o) {
	        if (this == o) return true;
	        if (!(o instanceof Generic)) return false;

	        Generic<?, ?> pair = (Generic<?, ?>) o;
	        return Objects.equals(key, pair.key) &&
	               Objects.equals(value, pair.value);
	    }

	    @Override
	    public int hashCode() {
	        return Objects.hash(key, value);
	    }

	    @Override
	    public String toString() {
	        return "Pair(" + key + ", " + value + ")";
	    }

	    public static void main(String[] args) {
	        Generic<String, Integer> pair = new Generic<>("age", 25);

	        System.out.println(pair.getKey());      // age
	        System.out.println(pair.getValue());    // 25

	        Generic<Integer, String> swapped = pair.swap();
	        System.out.println(swapped);             // Pair(25, age)
	    }
	}

