//
//  NativeCounterView.swift
//  ShadertoyRN
//
//  Created by Dom Chiu on 9/12/24.
//
/** Ask Cursor:
 * In a react-native iOS app developed with Expo framework, how does the interoperability between native iOS components and Expo codes work? Specifically, suppose I have an existing app developed with Expo, now I want to write a pure native view with UIKit or SwiftUI in Swift. I want the Expo side code be able to use that native view, pass necessary initial parameters to it, call its member functions, and get noticed as some delegate method are invoked. Give me a concrete example code.
 */
import UIKit

class NativeCounterView: UIView {
  private let label: UILabel
  private let button: UIButton
  private var count: Int = 0

  @objc
  var onCountChanged: ((Int) -> Void)?
  
  override init(frame: CGRect) {
    label = UILabel()
    button = UIButton(type: .system)
    super.init(frame: frame)
    setupView()
  }

  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  private func setupView() {
    label.textAlignment = .center
    label.text = "Count: 0"
  
    button.setTitle("Increment", for: .normal)
    button.addTarget(self, action: #selector(incrementCount), for: .touchUpInside)
  
    addSubview(label)
    addSubview(button)
  
    label.translatesAutoresizingMaskIntoConstraints = false
    button.translatesAutoresizingMaskIntoConstraints = false
  
    NSLayoutConstraint.activate([
      label.topAnchor.constraint(equalTo: topAnchor, constant: 20),
      label.centerXAnchor.constraint(equalTo: centerXAnchor),
      
      button.topAnchor.constraint(equalTo: label.bottomAnchor, constant: 20),
      button.centerXAnchor.constraint(equalTo: centerXAnchor)
    ])
  }

  @objc
  private func incrementCount() {
    count += 1
    label.text = "Count: \(count)"
    onCountChanged?(count)
  }

  @objc
  func setInitialCount(_ initialCount: Int) {
    count = initialCount
    label.text = "Count: \(count)"
  }
}
