import tensorflow as tf
import numpy as np
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load the TensorFlow model
model = tf.keras.models.load_model('path_to_your_model.h5')

# Define the image classification route
@app.route('/classify', methods=['POST'])
def classify_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'})

    # Preprocess image
    img = tf.keras.preprocessing.image.load_img(file, target_size=(224, 224))
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize the image

    # Make predictions
    predictions = model.predict(img_array)
    class_index = np.argmax(predictions, axis=1)
    return jsonify({'class_index': class_index.tolist(), 'confidence': predictions.tolist()})

if __name__ == '__main__':
    app.run(debug=True)