import { defineStore } from 'pinia'
import { breeds, coopInfo } from '../data/breeds.js'

// Using Options API syntax (matches your Vue component style)
export const useBreedsStore = defineStore('breeds', {
  // State: Your data (like data() in components)
  state: () => ({
    breeds: breeds,
    coopInfo: coopInfo,
    currentBreed: null,
  }),

  // Getters: Computed values (like computed in components)
  getters: {
    // Get a specific breed by ID
    getBreedById: (state) => {
      return (id) => state.breeds.find(breed => breed.id === id)
    },

    // Get a specific breed by name
    getBreedByName: (state) => {
      return (name) => state.breeds.find(breed =>
        breed.name.toLowerCase() === name.toLowerCase()
      )
    },

    // Get all our chicken names across all breeds
    getAllOurChickens: (state) => {
      return state.breeds.flatMap(breed => breed.ourChickens)
    },

    // Count total number of breeds
    totalBreeds: (state) => state.breeds.length,

    // Get all specialty features across breeds
    getAllSpecialties: (state) => {
      return state.breeds.flatMap(breed => breed.specialties)
    }
  },

  // Actions: Functions that can modify state (like methods in components)
  actions: {
    // Set the currently viewed breed
    setCurrentBreed(breedId) {
      this.currentBreed = this.getBreedById(breedId)
    },

    // Clear current breed selection
    clearCurrentBreed() {
      this.currentBreed = null
    },

    // Add a new chicken to a breed (for future use)
    addChickenToBreed(breedId, chickenName) {
      const breed = this.getBreedById(breedId)
      if (breed && !breed.ourChickens.includes(chickenName)) {
        breed.ourChickens.push(chickenName)
      }
    },

    // Remove a chicken from a breed (for future use)
    removeChickenFromBreed(breedId, chickenName) {
      const breed = this.getBreedById(breedId)
      if (breed) {
        const index = breed.ourChickens.indexOf(chickenName)
        if (index > -1) {
          breed.ourChickens.splice(index, 1)
        }
      }
    }
  }
})
