# Projects

## News Classification Evaluator and Ground Truth

I evaluated an AI system that classifies news articles into four categories: World,
Sports, Business, and Sci/Tech. I manually labelled 30 articles, compared my labels with
the AI's predictions and the benchmark labels, and analysed where the classifications disagreed.

The AI achieved 80% accuracy against the benchmark, with a Cohen's kappa of 0.7329. I examined
the confusion matrix, confidence calibration, prompt engineering, and the limitations of accuracy
on imbalanced datasets. For example, a classifier that predicted World for every article could
still achieve 80% accuracy because World dominated the dataset, despite failing to recognise the
other categories.

This project helped me understand the importance of evaluating AI systems with multiple metrics,
investigating errors, and questioning whether a headline performance figure tells the whole story.

## Newsroom Triage

I worked on Newsroom Triage, an application that classifies news headlines into four categories
and reports its confidence in each prediction. It also records previous predictions and includes
a scoring page that evaluates the application against the 30 articles I labelled during my last project.

The project connected AI classification with practical software development concepts, including
deployment, automated testing, retrieval, routing rules, and guardrails. Using my own labelled
examples as an evaluation set provided a way to measure the system's performance rather than
relying only on individual demonstrations.

## Personal Portfolio and Retrieval-Based Chatbot

A portfolio website I am currently customising as part of an AI and machine learning mentorship.
The project uses personal Markdown notes as a knowledge base, retrieves relevant information for
questions and generates answers using a language model.

I am working through the process of preparing documents for retrieval, comparing chunking strategies,
evaluating retrieval quality and configuring the chatbot's behaviour. The aim is to build a portfolio
that can answer questions about my background using relevant information rather than relying entirely
on a general prompt.

## Dual-Modality Pulmonary Imaging for Bedside Monitoring Applications

My master's dissertation explored the use of amplitude and phase data from a
wearable sensor system for pulmonary monitoring. I initially used MATLAB to store
and analyse the data, then developed a machine-learning pipeline to investigate whether
phase information could be enhanced using amplitude-derived information.

I applied a Hilbert transform for phase enhancement, extracted features from the signals
and trained Random Forest, Logistic Regression and k-Nearest Neighbours classifiers to distinguish
three breathing states. I evaluated the models using accuracy, precision, recall and F1-score,
with four-fold cross-validation.

This project combined mathematical signal processing with machine learning. It taught me
to investigate the quality of the input data, compare different approaches and evaluate
model performance systematically.

Stack: MATLAB, Python, NumPy, SciPy, scikit-learn, signal processing, feature engineering.

## Weed Classification Using Deep Convolutional Neural Networks

An image-classification project focused on identifying 25 plant and weed species from a
dataset of 15,050 images. I developed and evaluated a modified VGG16 convolutional neural
network using Python, TensorFlow and Keras.

I conducted eight structured experiments across different model and dataset configurations,
analysing accuracy, F1-score, confusion matrices and training and validation behaviour. Across
five runs, the model achieved an average accuracy of 97.92%, with a standard deviation of 0.005.
Using a reduced dataset also lowered average runtime by approximately 30% while maintaining accuracy
above 95%.

This project gave me practical experience with computer vision, deep learning, experimental
design and model evaluation.

Stack: Python, TensorFlow, Keras, VGG16, computer vision.