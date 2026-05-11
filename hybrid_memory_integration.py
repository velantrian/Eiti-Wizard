# hybrid_memory_integration.py
# Integration of HybridBiologicalMemory into Eiti-Wizard
# Created: 11 May 2026

from hybrid_biological_memory import HybridBiologicalMemory

class EitiWizardHybridMemory:
    def __init__(self):
        self.memory = HybridBiologicalMemory(name="Eiti-Wizard-Hybrid")
        print("🧙 Eiti-Wizard now uses HybridBiologicalMemory (4 biological layers)")

    def store_chat_memory(self, message: str, importance: float = 0.7):
        return self.memory.add_memory(message, importance=importance)

    def recall_relevant(self, query: str):
        # Use fractal layer for recall
        return self.memory.fractal_layer.recall(query)

    def adapt_to_user_stress(self, stress_level: float):
        return self.memory.adapt_behavior({"stress": stress_level})

    def get_wizard_status(self):
        return self.memory.get_full_status()

# Example usage in Eiti-Wizard
if __name__ == "__main__":
    wizard = EitiWizardHybridMemory()
    wizard.store_chat_memory("Пользователь спросил про гибридную память", importance=0.9)
    print(wizard.get_wizard_status())