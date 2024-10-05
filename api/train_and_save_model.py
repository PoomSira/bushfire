# train_and_save_model.py
import pickle
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_classification

# Create a sample dataset for demonstration
X, y = make_classification(n_samples=100, n_features=6, random_state=42)

# Split dataset into train and test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the model to a pickle file
with open('BB_random_forest_model.pkl', 'wb') as file:
    pickle.dump(model, file)

print("Model saved successfully!")
